import Contents from '~/components/Contents';

import Layout from '~/components/Layout';
import StickyFooter from '~/components/StickyFooter';
import StickySide from '~/components/StickySide';

export default function IndexPage() {
  return (
    <Layout>
      <Contents />
      <StickySide />
      <StickyFooter/>
    </Layout>
  );
}
