import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsData, setQuestionsData] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuestionsData(data))
  }, [])


 function handleAddQuestion(newQuestion) {
   console.log(newQuestion)
   setQuestionsData([...questionsData, newQuestion])
 }

 function handleDeleteQuestion(deletedQuestion) {
  const UpdatedQuestions = questionsData.filter(question => question.id !== deletedQuestion.id)
  setQuestionsData(UpdatedQuestions)
}

function handleUpdatedQuestion(updatedQuestion) {
  console.log(updatedQuestion)
  const updatedQuestions = questionsData.map((question) => {
    if (question.correctIndex !== updatedQuestion.correctIndex) {
      return updatedQuestion
    } else {
      return question
    }
  })
  setQuestionsData(updatedQuestions)
}
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm onAddQuestion={handleAddQuestion}/>
       : 
        <QuestionList onRemoveQuestion={handleDeleteQuestion} onChangedQuestion={handleUpdatedQuestion} questionsData={questionsData}/>}
    </main>
  );
}

export default App;
