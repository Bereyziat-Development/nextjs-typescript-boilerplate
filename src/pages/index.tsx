import { Meta } from '@/components/layouts/meta.layout';
import { MainTemplate } from '@/components/templates/main.template';

const Index = () => {
  return (
    <MainTemplate
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1>Welcome!</h1>
    </MainTemplate>
  );
};

export default Index;
