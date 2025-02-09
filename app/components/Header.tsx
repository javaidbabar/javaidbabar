import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuContent,
} from "@/components/ui/navigation-menu";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

interface HeaderProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

// const roles = [
//   "Engineering Manager",
//   "Solution Architect",
//   "Software Architect",
//   "Data Scientist",
//   "Full Stack Developer",
// ];

// const industries = [
//   "IoT",
//   "Ecommerce",
//   "Medical",
//   "Education",
//   "RPA",
//   "AI Agents",
// ];

export default function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 shadow-sm">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold"><a href="/">Babar Javaid</a></h1>

          <NavigationMenu>
            <NavigationMenuList>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/blog"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Latest Posts
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Check out our latest blog posts on technology and
                          architecture.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/blog?category=architecture"
                      >
                        Architecture
                      </a>
                    </li>
                    <li>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/blog?category=development"
                      >
                        Development
                      </a>
                    </li>
                    <li>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/blog?category=cloud"
                      >
                        Cloud & DevOps
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/projects?type=professional"
                      >
                        Professional Projects
                      </a>
                    </li>
                    <li>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/projects?type=personal"
                      >
                        Personal Projects
                      </a>
                    </li>
                    <li>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/projects?category=web"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/projects?category=mobile"
                      >
                        Mobile Apps
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="block select-none space-y-1 rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/resume"
                >
                  Resume
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* <div className="flex items-center space-x-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem
                    key={role}
                    value={role.toLowerCase().replace(/ /g, "-")}
                  >
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry.toLowerCase()}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeToggle}
            className="h-9 w-9"
          >
            {theme === "dark" ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button>Contact</Button>
        </div>
      </div>
    </header>
  );
}
