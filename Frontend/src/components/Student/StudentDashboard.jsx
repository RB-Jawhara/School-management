import React, { useEffect, useState } from 'react';
import StudentApi from '../../Service/Api/Student/StudentApi';

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getUser } = StudentApi();

  useEffect(() => {
    getUser()
      .then(({ data }) => {
        setStudent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur mlli bghina njibu student:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10">Chargement...</div>;
  if (!student) return <div className="p-10">Ma-lqina ta data.</div>;

  return (
    <div className="p-10">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">NAME</th>
              <th className="px-6 py-3">EMAIL</th>
              <th className="px-6 py-3">DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{student.id}</td>
              <td className="px-6 py-4">{student.name}</td>
              <td className="px-6 py-4">{student.email}</td>
              <td className="px-6 py-4 text-xs text-gray-400">
                {new Date(student.created_at).toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-gray-700 font-medium">Salam {student.name}.</p>
    </div>
  );
}