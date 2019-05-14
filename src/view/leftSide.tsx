import { h, Component } from 'preact';
import { HeadArea } from './headArea';
import { BodyArea } from './bodyArea';
import { SummaryArea } from './summaryArea';
import { cls } from '../helper/dom';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { SummaryPosition } from '../store/types';

interface StoreProps {
  width: number;
  scrollX: boolean;
  summaryPosition: SummaryPosition;
}

type Props = StoreProps & DispatchProps;

class LeftSideComp extends Component<Props> {
  public render({ width, scrollX }: Props) {
    const style = { width, display: 'block' };
    const { summaryPosition } = this.props;

    return (
      <div class={cls('lside-area')} style={style}>
        <HeadArea side="L" />
        {summaryPosition === 'top' && <SummaryArea side="L" />}
        <BodyArea side="L" />
        {summaryPosition === 'bottom' && <SummaryArea side="L" />}
        {scrollX && <div class={cls('scrollbar-left-bottom')} />}
      </div>
    );
  }
}

export const LeftSide = connect<StoreProps>(({ columnCoords, dimension }) => ({
  width: columnCoords.areaWidth.L,
  scrollX: dimension.scrollX,
  summaryPosition: dimension.summaryPosition
}))(LeftSideComp);
