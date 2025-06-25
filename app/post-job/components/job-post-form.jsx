"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  Chip,
  Checkbox,
  FormControlLabel,
} from "@mui/material"

export default function JobPostForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyUrl: "",
    jobTitle: "",
    location: "",
    experienceLevel: "",
    jobDescription: "",
    minSalary: "",
    maxSalary: "",
    relocationSupport: "",
    visaIncluded: "",
    applyFromAbroad: "",
    remoteWorkPolicy: "",
    role: "",
    applyLinkUrl: "",
    invoiceEmail: "",
    invoiceAddress: "",
    invoiceNotes: "",
    payLater: false,
  })

  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSkills, setSelectedSkills] = useState([])

  const locations = [
    "Dubai, United Arab Emirates",
    "Abu Dhabi, United Arab Emirates",
    "Riyadh, Saudi Arabia",
    "Jeddah, Saudi Arabia",
    "Remote",
  ]

  const experienceLevels = ["Entry Level", "Junior", "Intermediate", "Senior", "Lead", "Executive"]

  const salaryRanges = [
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
    "60",
    "65",
    "70",
    "75",
    "80",
    "85",
    "90",
    "95",
    "100",
    "110",
    "120",
    "130",
    "140",
    "150",
    "160",
    "170",
    "180",
    "190",
    "200",
  ]

  const languages = ["English", "Arabic", "French", "German", "Spanish", "Italian"]

  const roles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "UI Designer",
  ]

  const categories = [
    "Account & Client Management",
    "Consultancy",
    "Software & Engineering",
    "Data & Analytics",
    "Product & Project Management",
    "Support & IT",
    "Security",
    "Sales & Business Development",
    "Design & UX",
    "Quality Assurance & Testing",
  ]

  const skills = [
    "Software Engineering",
    "Product Management",
    "UX Design",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "Data Science",
    "SQL",
    "Git",
    "TypeScript",
    "Vue.js",
    "Angular",
    "MongoDB",
    "PostgreSQL",
    "Redis",
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleLanguageToggle = (language) => {
    setSelectedLanguages((prev) => (prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]))
  }

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", { formData, selectedLanguages, selectedCategories, selectedSkills })
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: "text.primary" }}>
        Reach 30,000+ Tech Job Seekers
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        We feature amongst the top jobs on our site with a 30-day promoted job post.
      </Typography>

      <Typography variant="body2" sx={{ mb: 4, color: "primary.main" }}>
        Jobs are being are marked with an asterisk (*)
      </Typography>

      {/* Company Name */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Company Name*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Enter your company brand or trade name. Avoid using Inc., Ltd, etc.
        </Typography>
        <TextField
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ "& .MuiOutlinedInput-root": { bgcolor: "white" } }}
        />
      </Box>

      {/* Company URL */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Company URL*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Enter your company's website, LinkedIn or other social link. We will use this to create your company profile.
        </Typography>
        <TextField
          name="companyUrl"
          placeholder="https://yourcompany.com"
          value={formData.companyUrl}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ "& .MuiOutlinedInput-root": { bgcolor: "white" } }}
        />
      </Box>

      {/* Job Title */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Job Title*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Specify a simple job title, such as "Looking Backend Developer", not a sentence like "Looking for a Backend
          Developer". Do not use ALL CAPS or excessive punctuation.
        </Typography>
        <TextField
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ "& .MuiOutlinedInput-root": { bgcolor: "white" } }}
        />
      </Box>

      {/* Location */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Location*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Select the primary location for the job. Select the main location for local remote jobs. For truly remote
          jobs, you can select "Unspecified".
        </Typography>
        <FormControl fullWidth required>
          <Select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            displayEmpty
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="" disabled>
              Select Location
            </MenuItem>
            {locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Experience Level */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Experience Level*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Select the minimum level of experience required for the job.
        </Typography>
        <FormControl fullWidth required>
          <Select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleInputChange}
            displayEmpty
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="" disabled>
              Select Experience Level
            </MenuItem>
            {experienceLevels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Job Description */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Job Description*
        </Typography>
        <TextField
          name="jobDescription"
          multiline
          rows={8}
          value={formData.jobDescription}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ "& .MuiOutlinedInput-root": { bgcolor: "white" } }}
        />
      </Box>

      {/* Salary Range */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Minimum Full-Time Equivalent Salary (US$)*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          If this is a contract role, enter the equivalent full-time salary. If you will not put a salary we will
          display an estimated salary based on market rates alongside the job posting.
        </Typography>
        <FormControl fullWidth required sx={{ mb: 2 }}>
          <Select
            name="minSalary"
            value={formData.minSalary}
            onChange={handleInputChange}
            displayEmpty
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="" disabled>
              Select Minimum Salary
            </MenuItem>
            {salaryRanges.map((salary) => (
              <MenuItem key={salary} value={salary}>
                ${salary}K
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Maximum Full-Time Equivalent Salary (US$)
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          If this is a contract role, enter the equivalent. If you will not put a salary we will display an estimated
          salary based on market rates alongside the job posting.
        </Typography>
        <FormControl fullWidth>
          <Select
            name="maxSalary"
            value={formData.maxSalary}
            onChange={handleInputChange}
            displayEmpty
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="" disabled>
              Select Maximum Salary
            </MenuItem>
            {salaryRanges.map((salary) => (
              <MenuItem key={salary} value={salary}>
                ${salary}K
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Relocation Support */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Relocation Support
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Let candidates know if your company provides relocation assistance.
        </Typography>
        <FormControl fullWidth>
          <Select
            name="relocationSupport"
            value={formData.relocationSupport}
            onChange={handleInputChange}
            displayEmpty
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="" disabled>
              Select Yes/No
            </MenuItem>
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Visa Included */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Visa Included
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Let candidates know if visa sponsorship is available.
        </Typography>
        <FormControl fullWidth>
          <Select
            name="visaIncluded"
            value={formData.visaIncluded}
            onChange={handleInputChange}
            displayEmpty
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="" disabled>
              Select Yes/No
            </MenuItem>
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Apply From Abroad */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Apply From Abroad
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Let candidates know if they can apply from abroad. This means they aren't required to already be in the
          location where the job is accepting the application.
        </Typography>
        <FormControl fullWidth>
          <Select
            name="applyFromAbroad"
            value={formData.applyFromAbroad}
            onChange={handleInputChange}
            displayEmpty
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="" disabled>
              Select Yes/No
            </MenuItem>
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Remote Work Policy */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Remote Work Policy
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Set the job's remote working policy.
        </Typography>
        <FormControl fullWidth>
          <Select
            name="remoteWorkPolicy"
            value={formData.remoteWorkPolicy}
            onChange={handleInputChange}
            displayEmpty
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="" disabled>
              Select Option
            </MenuItem>
            <MenuItem value="onsite">On-site</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="hybrid">Hybrid</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Required Languages */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Required Languages
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 2 }}>
          Select up to 4 languages and set the required language level for each.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {languages.map((language) => (
            <Chip
              key={language}
              label={language}
              onClick={() => handleLanguageToggle(language)}
              variant={selectedLanguages.includes(language) ? "filled" : "outlined"}
              sx={{
                bgcolor: selectedLanguages.includes(language) ? "grey.800" : "transparent",
                color: selectedLanguages.includes(language) ? "white" : "text.primary",
                borderColor: "grey.400",
                "&:hover": {
                  bgcolor: selectedLanguages.includes(language) ? "grey.700" : "grey.100",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Role */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Role
        </Typography>
        <FormControl fullWidth>
          <Select name="role" value={formData.role} onChange={handleInputChange} displayEmpty sx={{ bgcolor: "white" }}>
            <MenuItem value="" disabled>
              Select Role
            </MenuItem>
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Main Categories */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Main Categories
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => handleCategoryToggle(category)}
              variant={selectedCategories.includes(category) ? "filled" : "outlined"}
              sx={{
                bgcolor: selectedCategories.includes(category) ? "grey.800" : "transparent",
                color: selectedCategories.includes(category) ? "white" : "text.primary",
                borderColor: "grey.400",
                "&:hover": {
                  bgcolor: selectedCategories.includes(category) ? "grey.700" : "grey.100",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Skills */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Skills
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 2 }}>
          Select any skills required for the job.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onClick={() => handleSkillToggle(skill)}
              variant={selectedSkills.includes(skill) ? "filled" : "outlined"}
              sx={{
                bgcolor: selectedSkills.includes(skill) ? "grey.800" : "transparent",
                color: selectedSkills.includes(skill) ? "white" : "text.primary",
                borderColor: "grey.400",
                "&:hover": {
                  bgcolor: selectedSkills.includes(skill) ? "grey.700" : "grey.100",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Apply Link URL */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Apply Link URL*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Enter the URL of your application form or ATS. Applicants will be redirected here when they press the "Apply"
          button.
        </Typography>
        <TextField
          name="applyLinkUrl"
          placeholder="Enter your Application URL"
          value={formData.applyLinkUrl}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ "& .MuiOutlinedInput-root": { bgcolor: "white" } }}
        />
      </Box>

      {/* Invoice Email */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Invoice Email* (Not Public)
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Enter the URL of your application form or ATS. Applicants will be redirected here when they press the "Apply"
          button.
        </Typography>
        <TextField
          name="invoiceEmail"
          placeholder="Enter your Application URL"
          value={formData.invoiceEmail}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ "& .MuiOutlinedInput-root": { bgcolor: "white" } }}
        />
      </Box>

      {/* Invoice Address */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Invoice Address
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          If you want your company name and address to appear on the invoice, enter them here.
        </Typography>
        <TextField
          name="invoiceAddress"
          placeholder="Company Address"
          multiline
          rows={3}
          value={formData.invoiceAddress}
          onChange={handleInputChange}
          fullWidth
          sx={{ "& .MuiOutlinedInput-root": { bgcolor: "white" } }}
        />
      </Box>

      {/* Invoice Notes */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Invoice Notes / PO Number
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          If you want a note, such as a purchase order number to appear on the invoice, enter it here.
        </Typography>
        <TextField
          name="invoiceNotes"
          placeholder="e.g. PO Number 1234"
          value={formData.invoiceNotes}
          onChange={handleInputChange}
          fullWidth
          sx={{ "& .MuiOutlinedInput-root": { bgcolor: "white" } }}
        />
      </Box>

      {/* Pay Later Checkbox */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          If you check this, we will send you an invoice and you can pay it manually via bank transfer or payment link.
          You will still be published after payment.
        </Typography>
        <FormControlLabel
          control={
            <Checkbox name="payLater" checked={formData.payLater} onChange={handleInputChange} color="primary" />
          }
          label="I'd like to pay later"
        />
      </Box>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "grey.900",
          color: "white",
          px: 4,
          py: 1.5,
          borderRadius: 1,
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: 500,
          "&:hover": {
            bgcolor: "grey.800",
          },
        }}
      >
        Start Hiring - $299
      </Button>
    </Box>
  )
}
