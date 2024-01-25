import EditClientForm from "@/components/editClientForm";
import getEditData from "@/app/lib/getEditData";

const EditClient = async ({ params }) => {
  const { id } = params;
  const idState = await getEditData(id);
  return (
    <>
      <EditClientForm id={id} idState={idState} />
    </>
  );
};
export default EditClient;
