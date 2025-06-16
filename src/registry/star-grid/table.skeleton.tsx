import { Skeleton } from '@/components/ui/skeleton'

export function StarGridSkeleton() {
  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-2">
        <Skeleton className="w-24 h-8" />
        <Skeleton className="w-36 h-8 ml-auto" />
      </div>

      <div className="rounded-md border">
        <table className="w-full">
          <thead>
            <tr>
              {Array.from({ length: 5 }).map((_, idx) => (
                <th key={idx} className="p-2">
                  <Skeleton className="h-6 w-full" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, rowIdx) => (
              <tr key={rowIdx}>
                {Array.from({ length: 5 }).map((_, cellIdx) => (
                  <td key={cellIdx} className="p-2">
                    <Skeleton className="h-6 w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Skeleton className="w-20 h-8" />
        <Skeleton className="w-20 h-8" />
      </div>
    </div>
  )
}
