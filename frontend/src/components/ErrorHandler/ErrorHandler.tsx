import { Alert } from 'antd'
import { ReactNode } from 'react'

interface IErrorHandlerProps {
  thrownError: boolean
  errorDescription: string
  children: ReactNode
}

export const ErrorHandler: React.FC<IErrorHandlerProps> = ({
  thrownError,
  errorDescription,
  children,
}) => {
  return (
    <>
      {thrownError ? (
        <Alert
          message="Error"
          description={errorDescription}
          type="error"
          showIcon
        />
      ) : (
        children
      )}
    </>
  )
}
