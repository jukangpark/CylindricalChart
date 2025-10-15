import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import SettingsDrawer from "./SettingsDrawer";

const DrawerWrapper = forwardRef(
  ({ chartType, settings, onSettingsChange, onApiRequest }, ref) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const openDrawer = useCallback(() => {
      setIsSettingsOpen(true);
    }, []);

    const closeDrawer = useCallback(() => {
      setIsSettingsOpen(false);
    }, []);

    useImperativeHandle(ref, () => ({
      openDrawer,
      closeDrawer,
    }));

    return (
      <SettingsDrawer
        isOpen={isSettingsOpen}
        onClose={closeDrawer}
        chartType={chartType}
        settings={settings}
        onSettingsChange={onSettingsChange}
        onApiRequest={onApiRequest}
      />
    );
  }
);

export default DrawerWrapper;
