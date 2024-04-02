/**
 * useScrollTop
 * @description
 * コンポーネントがマウントされた際にスクロール位置をトップに戻す。
 * <ScrollRestoration />が動作しない場合に使用する。
 */
import { useEffect } from "react";

const useScrollTop = (targetId: string) => {
  useEffect(() => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollTop = 0;
    }
  }, [targetId]);
};

export default useScrollTop;
