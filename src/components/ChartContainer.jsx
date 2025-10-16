import React, { useState, useEffect, useCallback, useRef } from "react";
import DrawerWrapper from "./DrawerWrapper";
import DropdownWrapper from "./DropdownWrapper";
import {
  Container,
  Header,
  Title,
  Content,
  PageNavigation,
  PageButton,
  PageInfo,
} from "./ChartContainerStyle.ts";

const ChartContainer = ({
  title,
  children,
  className = "",
  chartType = "cylinder",
  data = [],
  onSettingsChange,
  onApiRequest,
}) => {
  const drawerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [settings, setSettings] = useState({
    viewCount: "AUTO",
    rotationTime: "AUTO",
    dataConditionType: "INDIVIDUAL",
    inData: "none",
    outData: "none",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [rotationInterval, setRotationInterval] = useState(null);

  const handleMenuItemClick = (action) => {
    if (action === "settings") {
      // DrawerWrapper의 openDrawer 함수 호출
      if (drawerRef.current) {
        drawerRef.current.openDrawer();
      }
    }
  };

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }
  };

  const getViewCountValue = useCallback(
    (viewCount) => {
      switch (viewCount) {
        case "FIVE":
          return 5;
        case "TEN":
          return 10;
        case "TWENTY":
          return 20;
        default:
          return data.length;
      }
    },
    [data.length]
  );

  const getRotationTimeInMs = (rotationTime) => {
    switch (rotationTime) {
      case "SEC_10":
        return 10000;
      case "SEC_30":
        return 30000;
      case "MIN_1":
        return 60000;
      default:
        return null;
    }
  };

  const getPaginationInfo = useCallback(() => {
    const viewCount = getViewCountValue(settings.viewCount);
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / viewCount);

    return {
      totalItems,
      totalPages,
      currentPage,
      viewCount,
    };
  }, [settings.viewCount, data.length, currentPage, getViewCountValue]);

  // 페이징된 데이터 계산
  const getPaginatedData = useCallback(() => {
    const paginationInfo = getPaginationInfo();
    const startIndex =
      (paginationInfo.currentPage - 1) * paginationInfo.viewCount;
    const endIndex = startIndex + paginationInfo.viewCount;

    return data.slice(startIndex, endIndex);
  }, [data, getPaginationInfo]);

  const handlePageChange = (newPage) => {
    const paginationInfo = getPaginationInfo();
    if (newPage >= 1 && newPage <= paginationInfo.totalPages) {
      setCurrentPage(newPage);
    }
  };

  // 자동 회전 로직
  useEffect(() => {
    if (rotationInterval) {
      clearInterval(rotationInterval);
    }

    const rotationTime = getRotationTimeInMs(settings.rotationTime);
    if (
      rotationTime &&
      (chartType === "cylinder" || chartType === "equalizer")
    ) {
      const interval = setInterval(() => {
        const paginationInfo = getPaginationInfo();
        const nextPage =
          paginationInfo.currentPage >= paginationInfo.totalPages
            ? 1
            : paginationInfo.currentPage + 1;
        setCurrentPage(nextPage);
      }, rotationTime);

      setRotationInterval(interval);
    }

    return () => {
      if (rotationInterval) {
        clearInterval(rotationInterval);
      }
    };
  }, [
    settings.rotationTime,
    currentPage,
    chartType,
    rotationInterval,
    getPaginationInfo,
  ]);

  // viewCount 변경 시 현재 페이지 조정
  useEffect(() => {
    const paginationInfo = getPaginationInfo();
    if (currentPage > paginationInfo.totalPages) {
      setCurrentPage(1);
    }
  }, [settings.viewCount, currentPage, getPaginationInfo]);

  return (
    <Container className={className}>
      <Header>
        <Title>{title}</Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          {(chartType === "cylinder" || chartType === "equalizer") &&
            (() => {
              const paginationInfo = getPaginationInfo();
              return (
                <PageNavigation>
                  <PageButton
                    disabled={paginationInfo.currentPage === 1}
                    onClick={() =>
                      handlePageChange(paginationInfo.currentPage - 1)
                    }
                  >
                    &lt;
                  </PageButton>
                  <PageInfo>
                    {String(paginationInfo.currentPage).padStart(2, "0")}/
                    {String(paginationInfo.totalPages).padStart(2, "0")}
                  </PageInfo>
                  <PageButton
                    disabled={
                      paginationInfo.currentPage === paginationInfo.totalPages
                    }
                    onClick={() =>
                      handlePageChange(paginationInfo.currentPage + 1)
                    }
                  >
                    &gt;
                  </PageButton>
                </PageNavigation>
              );
            })()}
          <DropdownWrapper
            ref={dropdownRef}
            onMenuItemClick={handleMenuItemClick}
          />
        </div>
      </Header>
      <Content>
        {React.cloneElement(children, {
          data:
            chartType === "cylinder" || chartType === "equalizer"
              ? getPaginatedData()
              : data,
        })}
      </Content>

      <DrawerWrapper
        ref={drawerRef}
        chartType={chartType}
        settings={settings}
        onSettingsChange={handleSettingsChange}
        onApiRequest={onApiRequest}
      />
    </Container>
  );
};

export default ChartContainer;
