using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using studentDetails_Api.Helphers;
using studentDetails_Api.Model;
using studentDetails_Api.Model.Dto;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace studentDetails_Api.Controllers
{
    // [Route("api/[controller]")]
    [Route("api/")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _studentContext;

        public UserController(ApplicationDbContext studentContext)
        {
            _studentContext = studentContext;

        }

        [HttpGet("getDetails")]
        public IActionResult userDetails()
        {
            try
            {
                if (_studentContext.studentDetails == null)
                {
                    return NotFound("db not connected");
                }
                var li = _studentContext.studentDetails.ToList();
                return Ok(li);
            }
            catch
            {
                throw;
            }

        }
        //post
        [HttpPost("saveDetails")]
        public ActionResult SaveDetails([FromBody] saveUserDetails data)
        {
            try
            {

                if (data.studentId != 0)
                {

                    var vStdDetail = _studentContext.studentDetails.Where(a => a.studentID == data.studentId).FirstOrDefault();
                    if (vStdDetail != null)
                    {
                        vStdDetail.firstName = data.firstName;
                        vStdDetail.lastName = data.lastName;
                        vStdDetail.email = data.email;
                        vStdDetail.mobileNumber = data.mobileNumber;
                        vStdDetail.gender = data.gender;
                        vStdDetail.dateOfBirth = DateOnly.Parse(data.dateOfBirth); //yyyy-MM-dd
                        vStdDetail.updatedDate = DateTime.Now;

                        _studentContext.SaveChanges();
                        return Ok("updated successfully");

                    } else
                    {
                        return BadRequest("student id not found");
                    }
                }
                else
                {
                    studentDetails stdObj = new studentDetails();
                    stdObj.firstName = data.firstName;
                    stdObj.lastName = data.lastName;
                    stdObj.email = data.email;
                    stdObj.mobileNumber = data.mobileNumber;
                    stdObj.gender = data.gender;
                    stdObj.dateOfBirth = DateOnly.Parse(data.dateOfBirth); //yyyy-MM-dd
                    stdObj.createdDate = DateTime.Now;

                    _studentContext.studentDetails.Add(stdObj);
                    _studentContext.SaveChanges();

                    return Ok("saved successfully");

                }
                return BadRequest();
            }
            catch (Exception err)
            {
                throw err;
            }

        }

        [HttpDelete("deleteStudentDetails/{studId}")]

        public ActionResult deleteStudentDetails(int studId)
        {

            var vStdDetail = _studentContext.studentDetails.Where(a => a.studentID == studId).FirstOrDefault();
            if (vStdDetail != null)
            {
                _studentContext.studentDetails.Remove(vStdDetail);

                // Save changes to the database
                _studentContext.SaveChanges();

                // Return a success response
                return Ok("Student details deleted successfully.");
            } else
            {
                return BadRequest("not found");

            }

        }

    }
}
