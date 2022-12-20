import React from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import Notify from './Notify';
import { NotifyAPI, NotifyKey, NotifyOpenConfig, Placement } from './interface';

interface NotifyWrapperProps {
  className?: string;
  prefixCls?: string;
}

type Placements = Partial<Record<Placement, NotifyOpenConfig[]>>;

const NotifyWrapper = React.forwardRef<NotifyAPI, NotifyWrapperProps>(
  (props, ref) => {
    const { className, prefixCls } = props;

    const [notifyList, setNotifyList] = React.useState<NotifyOpenConfig[]>([]);
    const [placementsMap, setPlacementMap] = React.useState<Placements>({});

    const closeNotify = (key: NotifyKey) => {
      setNotifyList((prevState) => {
        return prevState.filter((item) => item.key !== key);
      });
    };

    React.useEffect(() => {
      const newPlacements: Placements = {};
      notifyList.forEach((notifyConfig) => {
        const { placement = 'topRight' } = notifyConfig;
        newPlacements[placement] = newPlacements[placement] || [];
        newPlacements[placement].push(notifyConfig);
      });
      setPlacementMap(newPlacements);
    }, [notifyList]);

    React.useImperativeHandle(ref, () => {
      return {
        open(config) {
          setNotifyList((prevState) => {
            const nextList = [...prevState];
            const index = nextList.findIndex((item) => item.key === config.key);
            if (index >= 0) {
              nextList[index] = config;
            } else {
              nextList.push(config);
            }
            return nextList;
          });
        },
        destroy() {
          setNotifyList([]);
        },
        close(key) {
          closeNotify(key);
        }
      };
    });

    const placementsList = Object.keys(placementsMap) as Placement[];

    return createPortal(
      <>
        {placementsList.map((placement) => {
          const classes = classnames(className, prefixCls, {
            [`${prefixCls}-${placement}`]: placement
          });
          return (
            <div className={classes} key={placement}>
              {notifyList.map((notify) => {
                return (
                  <Notify
                    content={notify.content}
                    eventKey={notify.key}
                    key={notify.key}
                  />
                );
              })}
            </div>
          );
        })}
      </>,
      document.body
    );
  }
);

NotifyWrapper.defaultProps = {
  prefixCls: 'rice-notification'
};
NotifyWrapper.displayName = 'NotifyWrapper';

export default NotifyWrapper;
