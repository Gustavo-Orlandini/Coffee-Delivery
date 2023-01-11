import { Outlet } from 'react-router-dom'
import { ContentWrapper } from '../../../ContentWrapper'
import { Header } from '../../../Header'


export function DefaultLayout() {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </div>

  )
}
