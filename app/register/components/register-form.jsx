"use client"

import { useState } from "react"
import { Box, Typography, TextField, Button, Paper, Chip, Select, MenuItem, FormControl } from "@mui/material"
import { CloudUpload } from "@mui/icons-material"

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    headline: "",
    bio: "",
    website: "",
    github: "",
    gitlab: "",
    linkedin: "",
    experienceLevel: "",
    visibility: "",
  })

  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSkills, setSelectedSkills] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)

  const workCategories = [
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
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
      setSelectedFile(file)
    } else {
      alert("Please select only JPG or PNG files")
    }
  }

  const handleCategoryToggle = (category) => {
    if (selectedCategories.length < 3 || selectedCategories.includes(category)) {
      setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
      )
    }
  }

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", { formData, selectedCategories, selectedSkills, selectedFile })
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: "text.primary" }}>
        Job Seeker Profile
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        This information may be shared publicly, so be mindful of what you share here.
      </Typography>

      <Typography variant="body2" sx={{ mb: 4, color: "primary.main" }}>
        Required fields are marked with an asterisk (*)
      </Typography>

      {/* Full Name */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Full Name*
        </Typography>
        <TextField
          name="fullName"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
            },
          }}
        />
      </Box>

      {/* Headline */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Headline*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          The most important part of your profile, use this format: Role | Experience | Specialization / Key Strengths.
          Example: Full-Stack Developer | 10+ Years Experience | React, Node.js, AWS
        </Typography>
        <TextField
          name="headline"
          placeholder="Machine Learning Engineer | AWS re/Start Certified | Tensorflow, PyTorch, Python, Django, NLP, CV"
          value={formData.headline}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
            },
          }}
        />
      </Box>

      {/* Avatar */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Avatar
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Please only upload jpg and png files.
        </Typography>
        <Paper
          sx={{
            border: "2px dashed",
            borderColor: "grey.300",
            p: 6,
            textAlign: "center",
            cursor: "pointer",
            bgcolor: "grey.50",
            "&:hover": { borderColor: "primary.main" },
          }}
          onClick={() => document.getElementById("avatar-upload").click()}
        >
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="avatar-upload"
          />
          <CloudUpload sx={{ fontSize: 48, color: "grey.400", mb: 2 }} />
          <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
            {selectedFile ? selectedFile.name : "Upload an Avatar Image"}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Recommended: 1920 x 820 px, JPG or PNG. Max 2MB
          </Typography>
          {selectedFile && (
            <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
              ✓ File selected: {selectedFile.name}
            </Typography>
          )}
        </Paper>
      </Box>

      {/* Bio */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Bio*
        </Typography>
        <TextField
          name="bio"
          multiline
          rows={6}
          value={formData.bio}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
            },
          }}
        />
      </Box>

      {/* Work Categories */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Work Categories*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 2 }}>
          Select up to 3 main work categories for your profile.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {workCategories.map((category, index) => (
            <Chip
              key={`category-${index}-${category}`}
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
          Skills*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 2 }}>
          Select relevant skills for your profile.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {skills.map((skill, index) => (
            <Chip
              key={`skill-${index}-${skill}`}
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

      {/* Experience Level */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Experience Level*
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          Select the relevant level of experience required for the job.
        </Typography>
        <FormControl fullWidth required>
          <Select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleInputChange}
            displayEmpty
            sx={{
              bgcolor: "white",
            }}
          >
            <MenuItem value="" disabled>
              Select Experience Level
            </MenuItem>
            <MenuItem value="entry">Entry Level</MenuItem>
            <MenuItem value="junior">Junior</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="senior">Senior</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Website */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Website
        </Typography>
        <TextField
          name="website"
          placeholder="https://yourcompany.com"
          value={formData.website}
          onChange={handleInputChange}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
            },
          }}
        />
      </Box>

      {/* Github */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Github
        </Typography>
        <TextField
          name="github"
          placeholder="https://github.com/username"
          value={formData.github}
          onChange={handleInputChange}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
            },
          }}
        />
      </Box>

      {/* GitLab */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          GitLab
        </Typography>
        <TextField
          name="gitlab"
          placeholder="https://gitlab.com/username"
          value={formData.gitlab}
          onChange={handleInputChange}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
            },
          }}
        />
      </Box>

      {/* LinkedIn */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          LinkedIn
        </Typography>
        <TextField
          name="linkedin"
          placeholder="https://linkedin.com/in/username"
          value={formData.linkedin}
          onChange={handleInputChange}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
            },
          }}
        />
      </Box>

      {/* Visibility */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Visibility*
        </Typography>
        <FormControl fullWidth required>
          <Select
            name="visibility"
            value={formData.visibility}
            onChange={handleInputChange}
            displayEmpty
            sx={{
              bgcolor: "white",
            }}
          >
            <MenuItem value="" disabled>
              Select Visibility
            </MenuItem>
            <MenuItem value="public">Public</MenuItem>
            <MenuItem value="private">Private</MenuItem>
            <MenuItem value="limited">Limited</MenuItem>
          </Select>
        </FormControl>
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
