import Tag from '../components/Tag/tag';
import React from 'react';

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

export default TagDemo;
