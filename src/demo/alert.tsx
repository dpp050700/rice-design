import React from 'react';
import Alert from '../components/Alert/alert';

const AlertDemo = () => {
  return (
    <div>
      <p>
        <Alert title="11" description="22" />
      </p>
      <p>
        <Alert title="11" description="22" type="warning" />
      </p>
      <p>
        <Alert title="11" description="22" type="error" />
      </p>
      <p>
        <Alert title="11" description="22" closeContent={'关闭'} type="info" />
      </p>

      <p>
        <Alert title="11" description="22" plain={true} />
      </p>
      <p>
        <Alert title="11" description="22" type="warning" plain={true} />
      </p>
      <p>
        <Alert title="11" description="22" type="error" plain={true} />
      </p>
      <p>
        <Alert
          title="消息提示的文案"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          closeContent={'关闭'}
          type="info"
          plain={true}
          closeable={false}
        />
      </p>
    </div>
  );
};

export default AlertDemo;
