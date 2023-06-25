import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false)

  const changeMode = () => {
    setEnabled(!enabled);

    if(enabled){
        setTheme('light')
    }
    else(
        setTheme('dark')
    )
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="font-sans md:w-4/5 mx-auto flex justify-end py-4 font-semibold transition duration-200">
      <div className="h-full my-auto mx-2 text-sm">
        {enabled ? <div>Dark Mode</div> : <div>Light Mode</div>}
      </div>
      <Switch
        checked={enabled}
        onChange={changeMode}
        className={`${
          enabled ? "bg-material-white" : "bg-material-black"
        } mr-10 relative inline-flex h-8 w-14 items-center rounded-full`}
      >
        <span
          className={`${
            enabled
              ? "translate-x-7 bg-material-black"
              : "translate-x-1 bg-material-white"
          } inline-block h-6 w-6 transform rounded-full transition`}
        />
      </Switch>
    </div>
  );
};

export default ThemeSwitch;
