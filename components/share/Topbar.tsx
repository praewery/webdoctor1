import { OrganizationSwitcher, SignInButton, SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

function Topbar(){
    const isUserLoggedIn = true;
    return (
        <nav className='topbar'>
            <Link href="/" className='flex item-center gap-4'>
                <Image src="/assets/logo.png" alt="logo" width={28} height={28}  />
            </Link>
            <div className='flex item-center gap-1'>
                <div className='block md:hidden'>
                    <SignInButton>
                        <SignOutButton>
                            <div className='flex cursor-pointer'>
                                <Image 
                                src='/assets/logout.svg'
                                alt='logout'
                                width={24}
                                height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignInButton>
                </div>
                <OrganizationSwitcher />
            </div>
        </nav>
    )
}
export default Topbar