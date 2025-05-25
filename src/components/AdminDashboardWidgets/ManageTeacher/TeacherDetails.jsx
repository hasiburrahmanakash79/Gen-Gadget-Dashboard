import SectionTitle from "../../SectionTitle/SectionTitle";
import AllStudents from "../ManageStudent/AllStudents";

const TeacherDetails = () => {
  return (
    <div className="p-5">
      <SectionTitle title={"Teacher Details"}></SectionTitle>
      <div className="rounded-xl border border-base-300 p-5 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hasibur Rahman Akash</h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-medium text-gray-700 w-24 inline-block">
                E-mail:
              </span>
              <span className="text-gray-500">akash@gmail.com</span>
            </p>
            <p>
              <span className="font-medium text-gray-700 w-24 inline-block">
                Phone:
              </span>
              <span className="text-gray-500">+880 1636 828200</span>
            </p>
            <p>
              <span className="font-medium text-gray-700 w-24 inline-block">
                Address:
              </span>
              <span className="text-gray-500">
                123 Main Street, Dhaka, Bangladesh
              </span>
            </p>
            <p>
              <span className="font-medium text-gray-700 w-24 inline-block">
                LinkedIn:
              </span>
              <span className="text-gray-500">linkedin.com/in/akash</span>
            </p>
            <p>
              <span className="font-medium text-gray-700 w-24 inline-block">
                Website:
              </span>
              <span className="text-gray-500">portfolio.com</span>
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="rounded-full w-44  overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Teacher"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-7">
      <AllStudents/>
      </div>
    </div>
  );
};

export default TeacherDetails;
