import { FC, ReactNode } from "react"
import Head from "next/head"
import { BadgeCheckIcon } from '@heroicons/react/solid'
import GitHubIcon from '@mui/icons-material/GitHub';

type Title = {
    title: string;
    children: ReactNode;
}

export const Layout: FC<Title> = ({ children, title = 'Task ACT4' }) => {
  return (
    <div
        className=    
        "flex min-h-screen flex-col items-center justify-center font-mono text-gray-800"
    >
        <Head>
            <title>{title}</title>
        </Head>
        <header>
        <a 
            href='https://github.com/misakiishihara/Task-ACT4' 
            target='_blank'
            className='mt-6 flex justify-center z-10 absolute text-white' 
            rel="noreferrer"
        >
            <GitHubIcon />
        </a>
        </header>
        <main
            className="flex w-screen flex-1 flex-col items-center justify-center"
        >
            {children}
        </main>
        <footer
            className="flex h-12 w-full items-center justify-center border-t"
        >
            <BadgeCheckIcon className="h-6 width-6 text-blue-700"/>
        </footer>
    </div>
  )
}
