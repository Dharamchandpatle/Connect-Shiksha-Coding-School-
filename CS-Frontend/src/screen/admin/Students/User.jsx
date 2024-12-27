import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getRequest } from "../../../services/requests";
import requestsEndpoint from "../../../services/requestsEndpoint";
import { getDate } from "../../../services/dateFormate";

const MySwal = withReactContent(Swal);

const User = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getRequest(requestsEndpoint.allUsers, "admin");
        if (response.status) {
          setData(response.data);
        } else {
          MySwal.fire("Error", "Failed to fetch data", "error");
        }
      } catch (error) {
        MySwal.fire("Error", "An error occurred", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl mt-10 font-bold mb-10 text-center font-hobo text-color-red">
        All Students
      </h1>
      <div className="grid grid-cols-4 gap-10"></div>
      <div className="relative w-full d-block mx-auto overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 w-28">
                SR. NO.
              </th>
              <th scope="col" className="px-6 py-3">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3">
                Student Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Student Email
              </th>
              <th scope="col" className="px-6 py-3">
                Student Address
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Created Date
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : (
              data.map((user, index) => (
                <tr key={user.id || index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{index + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {getDate(user.createdAt)}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
