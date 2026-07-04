namespace SafeXCandidatePortal.Api.Models;

public class Candidate
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Experience { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string AppliedDate { get; set; } = string.Empty;
}