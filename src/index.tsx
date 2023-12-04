import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ScrollView } from 'react-native';
import type { ScrollViewProps } from 'react-native/Libraries/Components/ScrollView/ScrollView';
import { SCREEN_WIDTH } from './utils';

type Props<T> = {
  data: T[];
  children: React.ReactNode;
} & ScrollViewProps;

export const HorizonList = React.forwardRef(
  <T extends unknown>(
    {
      data,
      children,
      contentContainerStyle,
      showsHorizontalScrollIndicator = false,
      ...props
    }: Props<T>,
    ref: React.Ref<ScrollView>
  ) => {
    const [listSize, setListSize] = useState(0);

    const render = useRef(false);

    const onContentSizeChange = useCallback((width: number) => {
      if (!render) {
        setListSize(width);
      }
    }, []);

    useEffect(() => {
      if (listSize > 0) {
        render.current = true;
      }
    }, [listSize]);

    useEffect(() => {
      setListSize(0);
    }, [data]);

    const flexGrow = useMemo(() => {
      const listSizeEqualScreenWidth = listSize > 0 && listSize < SCREEN_WIDTH;

      if (listSizeEqualScreenWidth && data?.length > 0) {
        return { flexGrow: 1 };
      }

      if (data?.length) {
        return { flexGrow: 1 };
      }
      return null;
    }, [data, listSize]);

    return (
      <ScrollView
        {...props}
        ref={ref}
        contentContainerStyle={[flexGrow, contentContainerStyle]}
        onContentSizeChange={onContentSizeChange}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        horizontal
      >
        {children}
      </ScrollView>
    );
  }
);
