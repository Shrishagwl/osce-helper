"use client";

import { useState } from "react";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import { users } from "@/src/data/users";

export default function AdminUsersPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Users</h1>
        <Button>Add user</Button>
      </div>
      <Table>
        <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t border-slate-100 dark:border-slate-800">
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                {user.name}
              </td>
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                {user.email}
              </td>
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                {user.role}
              </td>
              <td className="px-4 py-3">
                <Badge variant={user.status === "Active" ? "success" : "danger"}>
                  {user.status}
                </Badge>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" size="sm" onClick={() => setModalOpen(true)}>
                    Change role
                  </Button>
                  <Button variant="ghost" size="sm">
                    Reset
                  </Button>
                  <Button variant="ghost" size="sm">
                    Disable
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal title="Change user role" isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>Select the new role for this user.</p>
          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900">
            <option>Student</option>
            <option>Educator</option>
            <option>Admin</option>
          </select>
          <div className="flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setModalOpen(false)}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
