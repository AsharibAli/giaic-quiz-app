import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ChevronDownIcon, MountainIcon } from "@/components/icons/icons";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#0e0e0e] bg-[url('/pattern.svg')] bg-[length:100px_100px] bg-repeat">
      <header className="flex h-14 items-center justify-between px-4 lg:px-6">
        <Link
          className="flex items-center justify-center"
          href="https://github.com/AsharibAli/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MountainIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Asharib Ali</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-white" variant="link">
              Available Quizzes
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/oop">TS OOP Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/asynchronous2">Asynchronous (2) Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/asynchronous">Asynchronous Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/loops">JS Loops Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/arrays">JS Arrays Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/modules">JS Modules Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/variables">JS Variables Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/js-ts">JS & TS Intro Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/react">React Intro Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/react-3">React Three Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/react-4">React Four Quiz</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center space-y-6 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Take the Quiz
          </h1>
          <p className="max-w-[600px] text-gray-400 md:text-xl">
            A quiz app for (Monday 2-5) GIAIC students to test their Knowledge
            (onsite) about what they learn (The Topics) in the Class.
          </p>
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Problem Statement</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                ➡️ Teacher & Student Ambassabdor{" "}
                <a href="https://github.com/AsharibAli/" target="_blank">
                  <strong>Asharib Ali</strong>
                </a>{" "}
                ❤️
              </AlertDialogTitle>
              <AlertDialogDescription>
                During my (Monday 2-5) GIAC onsite class, I noticed we lack
                activities for students to apply and test their programming
                knowledge effectively. Given the logistical challenge of
                engaging over 1500 students, I have created a quiz application.
                This app allows for direct participation of students through
                multiple quizzes based on class topics we teach, It also help us
                to see who is perfoming well and have interest in learning in
                our on-class.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-[#1e1e1e] px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024. All rights reserved.
        </p>
        <div className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs text-white underline-offset-4 hover:underline"
            href="https://github.com/AsharibAli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build with ❤️ by Asharib Ali
          </Link>
        </div>
      </footer>
    </div>
  );
}
