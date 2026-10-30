import { useState } from "react";

interface StudentGradeProps{
    name:string,
    className:string
    initialScore:number
    status:string
}

function StudentGrade({
  name,
  className,
  initialScore,
  status
} : StudentGradeProps )
{
  const [score, setScore] = useState(initialScore);

  const calculateFinalScore = (task:number, exam:number, attendance:number):number => {
    return task * 0.3 + exam * 0.5 + attendance * 0.2;
  };

  const updateScore = (currentScore, amount, operation) => {
    if (operation === "add") {
      return currentScore + amount;
    }

    return currentScore - amount;
  };

  const getGrade = (score:number):string =>    {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "E";
  };

  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Kelas: {className}</p>
      <p>Status: {status}</p>

      <p>Nilai saat ini: {score}</p>

      <p>Nilai akhir: {calculateFinalScore(score, 85, 90).toFixed(1)}</p>

      <p>Predikat: {getGrade(score)}</p>

      <div className="flex gap-2 mt-4">
        <button onClick={() => setScore(updateScore(score, 5, "add"))}>
          Tambah 5
        </button>

        <button onClick={() => setScore(updateScore(score, 5, "subtract"))}>
          Kurangi 5
        </button>
      </div>
    </div>
  );
}

export default StudentGrade;
