import React, { useState } from 'react';
import { BellRing, Check, Edit, Plus, TrashIcon } from 'lucide-react';
import Leftbar from './Leftbar';
import Topbar from './Topbar';

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const invoices = [
    { id: '01', name: 'sri', email: 'sri@gmail.com', password: '' },
    { id: '02', name: 'Thamarai', email: 'thoms@gmail.com', password: '' },
    { id: '03', name: 'neeju', email: 'neeju@gmail.com', password: '' },
    { id: '04', name: 'dhanu', email: 'dhanu@gmail.com', password: '' },
    { id: '05', name: 'sanju', email: 'sanju@gmail.com', password: '' },
    { id: '06', name: 'sowmi', email: 'sowmi@gmail.com', password: '' },
    { id: '07', name: 'stani', email: 'stani@gmail.com', password: '' },
    { id: '08', name: 'vishal', email: 'vishal@gmail.com', password: '' },
  ];

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <Topbar />
      <div className="flex flex-row w-full h-full">
        <Leftbar />
        <div className="flex-1 overflow-y-auto p-4 mt-16 ml-64">
          <div className="w-full max-w-5xl my-4 mx-auto">
            <div className="shadow-lg p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h2>Users</h2>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center p-2 rounded-lg bg-blue-500 text-white"
                >
                  <Plus className="h-6 w-6 mr-2" /> Add
                </button>
              </div>
              <div>
                <table className="w-full mt-4 border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 text-left border-b">Id</th>
                      <th className="p-2 text-left border-b">Name</th>
                      <th className="p-2 text-left border-b">Email</th>
                      <th className="p-2 text-left border-b">Password</th>
                      <th className="p-2 text-center border-b">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id}>
                        <td className="p-2 font-bold">{invoice.id}</td>
                        <td className="p-2">{invoice.name}</td>
                        <td className="p-2">{invoice.email}</td>
                        <td className="p-2">{invoice.password}</td>
                        <td className="p-2 text-center">
                          <div className="flex justify-center items-center gap-3">
                            <Edit className="h-5 w-5 text-blue-500 cursor-pointer" />
                            <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {open && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg w-full max-w-md">
                  <h3 className="mb-4">Add User</h3>
                  <div className="grid gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        className="p-2 border rounded"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="username">Username</label>
                      <input
                        id="username"
                        className="p-2 border rounded"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        className="p-2 border rounded"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        className="p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end mt-4">
                    <button
                      onClick={() => setOpen(!open)}
                      className="p-2 rounded-lg bg-red-500 text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="p-2 rounded-lg bg-blue-500 text-white"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;