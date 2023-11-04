// const GroundPhotoList = () => {
//     const [groundList, setGroundList] = useRecoilState(groundPhotoListState);
//     const [page, setPage] = useState(1);
//     const listPerPage = 8;
//     const totalPage = Math.ceil(groundList.length / listPerPage);
  
//     useEffect(() => {
//       (async () => {
//         const result = await Api.get(
//           `grounds?location=${location}&search=${searchInput}&offset=${
//             (page - 1) * listPerPage
//           }&count=${listPerPage}`,
//         );
//         setGroundList({
//           length: result.data.length,
//           data: result.data.grounds,
//         });
//       })();
//     }, [page]);
  
//     return (
//            ...
      
//         <Pagination
//           totalPage={totalPage}
//           limit={5}
//           page={page}
//           setPage={setPage}
//         />
//       </>
//     );
//   };
  
//   export default GroundPhotoList;