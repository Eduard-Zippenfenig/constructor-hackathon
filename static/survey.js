const surveyForm = document.getElementById("survey-form");

const describeFormData = (form) => {
  const data = new FormData(form);
  return {
    audio: data.get("audio"),
    structure: data.get("structure"),
    mathStyle: data.get("mathStyle"),
    grit: data.get("grit"),
  };
};

surveyForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const survey = describeFormData(event.target);
  try {
    const response = await fetch("/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(survey),
    });
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        window.location.href = "/";
        return;
      }
      alert(data.error || "Unable to save survey.");
      return;
    }
    window.location.href = "/";
  } catch (error) {
    alert("Unable to contact the server.");
  }
});
