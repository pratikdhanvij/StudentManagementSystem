app.post('/api/students', async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
