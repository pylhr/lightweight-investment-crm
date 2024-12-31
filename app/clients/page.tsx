import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search } from 'lucide-react'

export default function Clients() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Clients</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Client
        </Button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input className="pl-10 pr-4 py-2 w-full" placeholder="Search clients..." />
            </div>
            <Button variant="outline" className="ml-4">
              Filter
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Last Interaction</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Smith</TableCell>
              <TableCell>john.smith@example.com</TableCell>
              <TableCell>(555) 123-4567</TableCell>
              <TableCell>2023-05-15</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Active
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Emma Johnson</TableCell>
              <TableCell>emma.johnson@example.com</TableCell>
              <TableCell>(555) 987-6543</TableCell>
              <TableCell>2023-05-10</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  Pending
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Michael Brown</TableCell>
              <TableCell>michael.brown@example.com</TableCell>
              <TableCell>(555) 246-8135</TableCell>
              <TableCell>2023-05-05</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  Inactive
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

