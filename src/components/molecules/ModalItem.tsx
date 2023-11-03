import Button from "@/components/atoms/Button";
import { IProject } from "@/interfaces";
import Image from "next/image";

export interface IModalItem {
  name: string;
  image: string;
  description: string;
  links?: IProject["links"];
  login?: IProject["login"];
  link?: string;
  site?: string;
  teacher?: string;
}

const ModalProject = ({
  isOpen,
  handleClose,
  item,
}: {
  isOpen: boolean;
  handleClose: () => void;
  item: IModalItem;
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed bg-black bg-opacity-50 z-20 inset-0 overflow-y-auto">
          <div className="flex pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="z-30 inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full px-8 py-6">
              <div className="w-full text-slate-900 dark:text-slate-200">
                <h4 className="text-lg font-urbanist font-bold">{item.name}</h4>
                {item.description && (
                  <p className="text-sm mt-2 mb-4">{item.description}</p>
                )}
                {item.site && item.teacher && (
                  <p className="text-sm my-2">
                    It&apos;s in {item.site} by the teacher {item.teacher}
                  </p>
                )}

                <Image
                  src={item.image}
                  alt={`${item.name} ${item.image}`}
                  width={500}
                  height={500}
                  className="rounded-lg h-80 object-contain"
                />
              </div>

              {item?.login !== undefined && (
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                    Email:{" "}
                    <span className="font-normal">{item.login.email}</span>
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                    Password:{" "}
                    <span className="font-normal">{item.login.password}</span>
                  </p>
                </div>
              )}

              <div className="flex gap-2 mt-2">
                {item?.links !== undefined && (
                  <>
                    {Object.keys(item.links).map((key) => (
                      <a
                        key={key}
                        href={(item.links as any)[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>
                          See {key === "demo" ? "Demo" : "Repository"}
                        </Button>
                      </a>
                    ))}
                  </>
                )}

                {item?.link && (
                  <>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>See course</Button>
                    </a>
                    <a
                      href={`/images/${item.image}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>See certificate</Button>
                    </a>
                  </>
                )}

                <Button onClick={handleClose}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalProject;

