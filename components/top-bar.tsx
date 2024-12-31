import { Bell, LogOut, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TopBar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input className="pl-10" placeholder="Search..." type="search" />
        </div>
        <div className="flex items-center">
          <Button className="mr-4" size="icon" variant="ghost">
            <Bell className="h-5 w-5" />
          </Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center">
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <SelectValue placeholder="John Doe" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="profile">Profile</SelectItem>
              <SelectItem value="settings">Settings</SelectItem>
              <SelectItem value="logout">
                <span className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}

