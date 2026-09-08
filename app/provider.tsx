'use client';
import {RootProvider} from 'fumadocs-ui/provider';
import SearchDialog from '@/components/search';
import type {ReactNode} from 'react';
import {Banner} from "fumadocs-ui/components/banner";
import Link from "next/link";

export function Provider({children}: { children: ReactNode }) {
    return (
        <>
            <Banner variant="rainbow" id="pedro-release">
                <span className="prose">
                    <Link className="link prose" href="/docs/pathing">
                        Pedro 3 has been released! Check out the new tuning and features in the latest version.
                    </Link>
                </span>
            </Banner>
            <RootProvider theme={{defaultTheme: 'dark'}} search={{SearchDialog}}>{children}</RootProvider>
        </>
    )

}