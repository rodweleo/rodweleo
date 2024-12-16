'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <section className='grid place-items-center'>
            <div className='grid place-items-center'>
                <h2>Something went wrong!</h2>
                <Button
                    onClick={
                        () => reset()
                    }
                >
                    Try again
                </Button>
            </div>
        </section>
    )
}