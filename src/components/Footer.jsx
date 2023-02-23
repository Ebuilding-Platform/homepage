import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import logoCreative from '@/images/logos/creative-destruction-lab.png'
import logoCanadian from '@/images/logos/canadian-ecosystem-institute.png'
import logoKingdom from '@/images/logos/kingdom.png'
import logoHatch from '@/images/logos/hatch.png'
import logoLandmark from '@/images/logos/landmark-west.png'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container className="text-center pt-24">
        <div>
          <p className="font-display text-base text-slate-900">
            Supported by
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                { name: 'Transistor', logo: logoCanadian },
                { name: 'Tuple', logo: logoKingdom },
                { name: 'StaticKit', logo: logoLandmark },
              ],
              [
                { name: 'Mirage', logo: logoCreative },
                { name: 'Laravel', logo: logoHatch },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <Image src={company.logo} alt={company.name} unoptimized />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-16">
          {/* <Logo className="mx-auto h-10 w-auto" /> */}
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#top">Overview</NavLink>
              <NavLink href="#get-started-today">Get Started</NavLink>
              <NavLink href="#secondary-features">Features</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} EBuilding. All rights
            reserved.
          </p>
        </div>
      </Container>

    </footer>
  )
}
