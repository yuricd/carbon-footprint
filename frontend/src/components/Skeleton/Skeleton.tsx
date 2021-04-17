import { Skeleton } from 'antd'

export const RenderSkeleton = () => {
  return (
    <div data-testid="skeleton">
      {Array(4)
        .fill(0)
        .map((_, idx: number) => (
          <Skeleton.Avatar key={idx} active={true} size={188} shape="square" />
        ))}
    </div>
  )
}
