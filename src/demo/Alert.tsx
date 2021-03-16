import React from 'react';
import Alert from '../components/Alert/Alert';

const App: React.FC = () => {
  const title = <div>通知</div>;
  return (
    <div>
      <Alert
        title={title}
        effect="light"
        onClose={() => {
          console.log('关闭啦');
        }}
        closeText="关闭"
      />
      <Alert title={title} effect="dark" icon="111" closable={false} />
      <Alert title={title} effect="light" type="success" description="自2月30号起，全员涨薪100%" />
      <Alert title={title} effect="dark" type="success" showIcon={false} />
      <Alert title={title} effect="light" type="warning" />
      <Alert title={title} effect="dark" type="warning" />
      <Alert title={title} effect="light" type="info" />
      <Alert title={title} effect="dark" type="info" />
      <Alert title={title} effect="light" type="error" />
      <Alert title={title} effect="dark" type="error" />
    </div>
  );
};

export default App;
