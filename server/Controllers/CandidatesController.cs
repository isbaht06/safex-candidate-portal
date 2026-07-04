using Microsoft.AspNetCore.Mvc;
using SafeXCandidatePortal.Api.Models;

namespace SafeXCandidatePortal.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CandidatesController : ControllerBase
{
    //mock data as the frontend, now served from the backend
    private static readonly List<Candidate> Candidates = new()
    {
        new Candidate { Id = 1, Name = "Fatima Khan", Role = "Frontend Developer Intern", Status = "Interview Scheduled", Email = "fatima.khan@example.com", Experience = "1 yr React", Location = "Islamabad", AppliedDate = "Jun 29" },
        new Candidate { Id = 2, Name = "Omar Siddiqui", Role = "Cybersecurity Intern", Status = "New Application", Email = "omar.siddiqui@example.com", Experience = "Fresh Graduate", Location = "Karachi", AppliedDate = "Jun 28" },
        new Candidate { Id = 3, Name = "Zainab Malik", Role = "UI/UX Design Intern", Status = "Offer Extended", Email = "zainab.malik@example.com", Experience = "2 yrs Figma", Location = "Lahore", AppliedDate = "Jun 28" },
        new Candidate { Id = 4, Name = "Bilal Ahmed", Role = "Backend Developer Intern", Status = "Hired", Email = "bilal.ahmed@example.com", Experience = "1.5 yrs .NET", Location = "Rawalpindi", AppliedDate = "Jun 27" },
        new Candidate { Id = 5, Name = "Ayesha Raza", Role = "Data Analyst Intern", Status = "New Application", Email = "ayesha.raza@example.com", Experience = "Fresh Graduate", Location = "Islamabad", AppliedDate = "Jun 26" },
        new Candidate { Id = 6, Name = "Hassan Iqbal", Role = "Cloud Engineering Intern", Status = "Interview Scheduled", Email = "hassan.iqbal@example.com", Experience = "1 yr Azure", Location = "Karachi", AppliedDate = "Jun 25" },
        new Candidate { Id = 7, Name = "Sana Tariq", Role = "Marketing Intern", Status = "Rejected", Email = "sana.tariq@example.com", Experience = "6 months", Location = "Lahore", AppliedDate = "Jun 24" },
        new Candidate { Id = 8, Name = "Usman Farooq", Role = "Frontend Developer Intern", Status = "New Application", Email = "usman.farooq@example.com", Experience = "Fresh Graduate", Location = "Peshawar", AppliedDate = "Jun 23" },
        new Candidate { Id = 9, Name = "Mariam Chaudhry", Role = "Cybersecurity Intern", Status = "Offer Extended", Email = "mariam.chaudhry@example.com", Experience = "1 yr SOC", Location = "Islamabad", AppliedDate = "Jun 22" },
        new Candidate { Id = 10, Name = "Ahmed Raza", Role = "Backend Developer Intern", Status = "Interview Scheduled", Email = "ahmed.raza@example.com", Experience = "2 yrs Node.js", Location = "Karachi", AppliedDate = "Jun 21" },
        new Candidate { Id = 11, Name = "Noor-ul-Ain", Role = "UI/UX Design Intern", Status = "New Application", Email = "noor.ulain@example.com", Experience = "Fresh Graduate", Location = "Rawalpindi", AppliedDate = "Jun 20" },
        new Candidate { Id = 12, Name = "Bilquis Noor", Role = "Data Analyst Intern", Status = "Hired", Email = "bilquis.noor@example.com", Experience = "1 yr SQL", Location = "Lahore", AppliedDate = "Jun 19" },
    };

    // GET /api/candidates
    // GET /api/candidates?search=fatima&status=Hired
    [HttpGet]
    public ActionResult<IEnumerable<Candidate>> GetAll([FromQuery] string? search, [FromQuery] string? status)
    {
        var results = Candidates.AsEnumerable();

        if (!string.IsNullOrWhiteSpace(search))
        {
            results = results.Where(c =>
                c.Name.Contains(search, StringComparison.OrdinalIgnoreCase) ||
                c.Role.Contains(search, StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrWhiteSpace(status) && status != "All Statuses")
        {
            results = results.Where(c => c.Status == status);
        }

        return Ok(results.ToList());
    }

    // GET /api/candidates/5
    [HttpGet("{id}")]
    public ActionResult<Candidate> GetById(int id)
    {
        var candidate = Candidates.FirstOrDefault(c => c.Id == id);
        if (candidate is null) return NotFound();
        return Ok(candidate);
    }
}