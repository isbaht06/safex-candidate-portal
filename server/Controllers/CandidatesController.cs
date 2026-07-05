using Microsoft.AspNetCore.Mvc;
using SafeXCandidatePortal.Api.Models;
using SafeXCandidatePortal.Api.Services;

namespace SafeXCandidatePortal.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CandidatesController : ControllerBase
{
    private readonly IEmailService _emailService;
    private static int _nextId = 13;

    public CandidatesController(IEmailService emailService)
    {
        _emailService = emailService;
    }

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

    [HttpGet("{id}")]
    public ActionResult<Candidate> GetById(int id)
    {
        var candidate = Candidates.FirstOrDefault(c => c.Id == id);

        if (candidate is null)
            return NotFound();

        return Ok(candidate);
    }

    // GET /api/candidates/5/resume
    [HttpGet("{id}/resume")]
    public ActionResult GetResume(int id)
    {
        var candidate = Candidates.FirstOrDefault(c => c.Id == id);

        if (candidate is null)
            return NotFound();

        var resumeText =
$@"{candidate.Name}
{candidate.Role} Applicant

Location: {candidate.Location}
Email: {candidate.Email}
Experience: {candidate.Experience}
Application Status: {candidate.Status}
Applied: {candidate.AppliedDate}

------------------------------------------------------------
This is a generated resume summary based on the candidate's
application record. Uploaded resume file storage is not yet
connected to this portal.
------------------------------------------------------------";

        return Ok(new
        {
            fileName = $"{candidate.Name.Replace(" ", "_")}_Resume.txt",
            content = resumeText
        });
    }

    // POST /api/candidates
    [HttpPost]
    public ActionResult<Candidate> Create([FromBody] CandidateCreateRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Name) ||
            string.IsNullOrWhiteSpace(request.Email))
        {
            return BadRequest("Name and email are required.");
        }

        var candidate = new Candidate
        {
            Id = _nextId++,
            Name = request.Name,
            Role = request.Role,
            Status = string.IsNullOrWhiteSpace(request.Status)
                ? "New Application"
                : request.Status,
            Email = request.Email,
            Experience = request.Experience,
            Location = request.Location,
            AppliedDate = DateTime.Now.ToString("MMM d"),
        };

        Candidates.Add(candidate);

        return CreatedAtAction(nameof(GetById), new { id = candidate.Id }, candidate);
    }

    // POST /api/candidates/5/email
    [HttpPost("{id}/email")]
    public async Task<IActionResult> SendEmail(int id, [FromBody] EmailRequest request)
    {
        var candidate = Candidates.FirstOrDefault(c => c.Id == id);

        if (candidate is null)
            return NotFound();

        if (string.IsNullOrWhiteSpace(request.Subject) ||
            string.IsNullOrWhiteSpace(request.Body))
        {
            return BadRequest("Subject and body are required.");
        }

        var success = await _emailService.SendEmailAsync(
            candidate.Email,
            candidate.Name,
            request.Subject,
            request.Body);

        if (!success)
        {
            return StatusCode(502, "Failed to send email. Check backend logs and SMTP settings.");
        }

        return Ok(new
        {
            message = $"Email sent to {candidate.Name}."
        });
    }
}