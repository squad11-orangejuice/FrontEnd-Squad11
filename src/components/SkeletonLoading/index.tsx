import Skeleton from '@mui/material/Skeleton'
import { DivSkeleton } from './styles'

type SkeletonLoadingProps = {
  quantity: number
}

export function SkeletonLoading({ quantity }: SkeletonLoadingProps) {
  return (
    <>
      {Array.from({ length: quantity }, (_, index) => (
        <Skeleton key={index} variant="rectangular">
          <DivSkeleton />
        </Skeleton>
      ))}
    </>
  )
}
