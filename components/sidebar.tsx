import Link from "next/link"
import { Layout, Users, PieChart, Calendar, Settings } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600">InvestCRM</h1>
      </div>
      <nav className="mt-6">
        <Link className="flex items-center px-4 py-2 text-gray-700 bg-gray-100" href="/">
          <Layout className="mr-3 h-5 w-5" />
          Dashboard
        </Link>
        <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100" href="/clients">
          <Users className="mr-3 h-5 w-5" />
          Clients
        </Link>
        <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100" href="/deals">
          <PieChart className="mr-3 h-5 w-5" />
          Deals
        </Link>
        <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100" href="/tasks">
          <Calendar className="mr-3 h-5 w-5" />
          Tasks
        </Link>
        <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100" href="/settings">
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </Link>
      </nav>
    </aside>
  )
}

