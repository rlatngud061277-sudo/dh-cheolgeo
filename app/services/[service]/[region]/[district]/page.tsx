
function getPhotos(
  service: ServiceSlug,
  region: string
): PhotoSet {
  const item = SERVICES[service];

  // 충남 개별페이지
  if (region === "chungnam") {
    return {
      main: "/IMG_2386.jpeg",
      before: "/IMG_2385.jpeg",
      after: "/IMG_2384.jpeg",
    };
  }

  // 충북 개별페이지
  if (region === "chungbuk") {
    return {
      main: "/IMG_2382.jpeg",
      before: "/IMG_2382.jpeg",
      after: "/IMG_2386.jpeg",
    };
  }

  // 경기 개별페이지 기존 유지
  return {
    main: item.image,
    before: item.before ?? null,
    after: item.after ?? null,
  };
}
