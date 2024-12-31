import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search } from 'lucide-react'

export default function Deals() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Deals</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Deal
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input className="pl-10 pr-4 py-2 w-full" placeholder="Search deals..." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Prospecting Column */}
        <Card>
          <CardHeader className="bg-blue-50">
            <CardTitle>Prospecting</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Tech Innovations Inc.</h4>
                  <p className="text-sm text-gray-500">$50,000 - John Smith</p>
                  <p className="text-sm text-gray-500">Expected close: 2023-06-30</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Global Solutions Ltd.</h4>
                  <p className="text-sm text-gray-500">$75,000 - Emma Johnson</p>
                  <p className="text-sm text-gray-500">Expected close: 2023-07-15</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Negotiation Column */}
        <Card>
          <CardHeader className="bg-yellow-50">
            <CardTitle>Negotiation</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Innovative Startups Co.</h4>
                  <p className="text-sm text-gray-500">$100,000 - Michael Brown</p>
                  <p className="text-sm text-gray-500">Expected close: 2023-06-15</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Closed Column */}
        <Card>
          <CardHeader className="bg-green-50">
            <CardTitle>Closed</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Future Enterprises Inc.</h4>
                  <p className="text-sm text-gray-500">$200,000 - John Smith</p>
                  <p className="text-sm text-gray-500">Closed: 2023-05-01</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Dynamic Systems LLC</h4>
                  <p className="text-sm text-gray-500">$150,000 - Emma Johnson</p>
                  <p className="text-sm text-gray-500">Closed: 2023-05-10</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

