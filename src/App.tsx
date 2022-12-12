import React from 'react';
import Button from './components/Button/button';
import Tag from './components/Tag/tag';
import Icon from './components/Icon/icon';
import Alert from './components/Alert/alert';

const ButtonDemo = () => {
  return (
    <div className="App">
      <div>
        <h1>Size</h1>
        <Button size="large">large</Button>
        <Button size="default">default</Button>
        <Button size="medium">medium</Button>
        <Button size="small">small</Button>
      </div>
      <div>
        <h1>type</h1>
        <Button type="default">default</Button>
        <Button type="primary">primary</Button>
        <Button type="danger">danger</Button>
        <Button type="warning">warning</Button>
        <Button type="info">info</Button>
        <div className="space-vertical">
          <Button type="default" round={true}>
            default
          </Button>
          <Button type="primary" round={true}>
            primary
          </Button>
          <Button type="danger" round={true}>
            danger
          </Button>
          <Button type="warning" round={true}>
            warning
          </Button>
          <Button type="info" round={true}>
            info
          </Button>
        </div>
        <div className="space-vertical">
          <Button type="default" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
          <Button type="primary" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
          <Button type="danger" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
          <Button type="warning" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
          <Button type="info" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
        </div>
      </div>
      <div>
        <h1>plain</h1>
        <Button type="default" plain={true}>
          default
        </Button>
        <Button type="primary" plain={true}>
          primary
        </Button>
        <Button type="danger" plain={true}>
          danger
        </Button>
        <Button type="warning" plain={true}>
          warning
        </Button>
        <Button type="info" plain={true}>
          info
        </Button>
      </div>
      <div>
        <h1>text</h1>
        <Button type="default" text={true}>
          default
        </Button>
        <Button type="primary" text={true}>
          primary
        </Button>
        <Button type="danger" text={true}>
          danger
        </Button>
        <Button type="warning" text={true}>
          warning
        </Button>
        <Button type="info" text={true}>
          info
        </Button>
      </div>
      <div>
        <h1>text & plain</h1>
        <Button type="default" text={true} plain={true}>
          default
        </Button>
        <Button type="primary" text={true} plain={true}>
          primary
        </Button>
        <Button type="danger" text={true} plain={true}>
          danger
        </Button>
        <Button type="warning" text={true} plain={true}>
          warning
        </Button>
        <Button type="info" text={true} plain={true}>
          info
        </Button>
      </div>
      <div>
        <h1>disabled</h1>
        <div className="space-vertical">
          <Button type="default" text={true} disabled={true}>
            default
          </Button>
          <Button type="primary" text={true} disabled={true}>
            primary
          </Button>
          <Button type="danger" text={true} disabled={true}>
            danger
          </Button>
          <Button type="warning" text={true} disabled={true}>
            warning
          </Button>
          <Button type="info" text={true} disabled={true}>
            info
          </Button>
        </div>
        <div className="space-vertical">
          <Button type="default" text={true} plain={true} disabled={true}>
            default
          </Button>
          <Button type="primary" text={true} plain={true} disabled={true}>
            primary
          </Button>
          <Button type="danger" text={true} plain={true} disabled={true}>
            danger
          </Button>
          <Button type="warning" text={true} plain={true} disabled={true}>
            warning
          </Button>
          <Button type="info" text={true} plain={true} disabled={true}>
            info
          </Button>
        </div>
        <div className="space-vertical">
          <Button type="default" disabled={true}>
            default
          </Button>
          <Button type="primary" disabled={true}>
            primary
          </Button>
          <Button type="danger" disabled={true}>
            danger
          </Button>
          <Button type="warning" disabled={true}>
            warning
          </Button>
          <Button type="info" disabled={true}>
            info
          </Button>
        </div>
        <div className="space-vertical">
          <Button type="default" disabled={true} plain={true}>
            default
          </Button>
          <Button type="primary" disabled={true} plain={true}>
            primary
          </Button>
          <Button type="danger" disabled={true} plain={true}>
            danger
          </Button>
          <Button type="warning" disabled={true} plain={true}>
            warning
          </Button>
          <Button type="info" disabled={true} plain={true}>
            info
          </Button>
        </div>
      </div>
      <div>
        <h1>Block</h1>
        <Button size="large" block={true}>
          large
        </Button>
        <div style={{ width: '200px' }} className="space-vertical">
          <Button size="default" block={true} round={true}>
            default
          </Button>
        </div>
      </div>
    </div>
  );
};

const TagDemo = () => {
  return (
    <div>
      <div>
        <p>size</p>
        <Tag size="large">标签</Tag>
        <Tag size="default">标签</Tag>
        <Tag size="medium">标签</Tag>
        <Tag size="small">标签</Tag>
      </div>
      <div>
        <p>type</p>
        <Tag type="primary">标签</Tag>
        <Tag type="success">标签</Tag>
        <Tag type="warning">标签</Tag>
        <Tag type="info">标签</Tag>
        <Tag type="danger">标签</Tag>
      </div>
      <div>
        <p>dark</p>
        <Tag effect="dark" type="primary">
          标签
        </Tag>
        <Tag effect="dark" type="success">
          标签
        </Tag>
        <Tag effect="dark" type="warning">
          标签
        </Tag>
        <Tag effect="dark" type="info">
          标签
        </Tag>
        <Tag effect="dark" type="danger">
          标签
        </Tag>
      </div>
      <div>
        <p>plain</p>
        <Tag effect="plain" type="primary">
          标签
        </Tag>
        <Tag effect="plain" type="success">
          标签
        </Tag>
        <Tag effect="plain" type="warning">
          标签
        </Tag>
        <Tag effect="plain" type="info">
          标签
        </Tag>
        <Tag effect="plain" type="danger">
          标签
        </Tag>
      </div>
      <div>
        <p>color</p>
        <Tag effect="plain" type="primary" color="#f50">
          标签
        </Tag>
        <Tag effect="dark" type="primary" color="#f50">
          标签
        </Tag>
        <Tag effect="light" type="primary" color="#f50">
          标签
        </Tag>
      </div>
    </div>
  );
};

const IconDemo = () => {
  return (
    <div>
      <Icon name="delete"></Icon>
    </div>
  );
};

const AlertDemo = () => {
  const AlertIcon = () => {
    return <div>223s</div>;
  };
  return (
    <div>
      <Alert title="11" description="22" />
      <Alert title="11" description="22" icon={<div>222</div>} />
      <Alert
        title="11"
        description="22"
        icon={<AlertIcon />}
        closeContent={'关闭'}
      />
    </div>
  );
};

const demo: any = {
  ButtonDemo,
  IconDemo,
  TagDemo,
  AlertDemo
};

function App() {
  const pathName = window.location.pathname.replace('/', '');
  const demoName: any = pathName[0].toUpperCase() + pathName.slice(1) + 'Demo';
  return React.createElement(demo[demoName]);
  // switch (pathName) {
  //   case 'button':
  //     return <ButtonDemo />;
  //   case 'tag':
  //     return <TagDemo />;
  //   case 'icon':
  //     return <IconDemo />;
  //   case 'alert':
  //     return <AlertDemo />;
  //   default:
  //     return null;
  // }
  // return null;
}

export default App;
