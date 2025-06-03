const Content = () => {
  return (
    <div className="w-9/12 mx-auto mb-20">
      <div>
        <h1 className="text-9xl uppercase font-[1000]"> your feet deserve the best </h1>
      </div>
      <div className="mt-10 w-150">
        <p className="font-medium text-lg text-slate-400">
          Step into style, comfort, and confidence. Elevate every stride with
          premium footwear designed for your journey. Walk bolder, run faster,
          stand taller. Where performance meets passion—step into greatness with
          Pruthvi.
        </p>
      </div>
      <div className="mt-10 flex gap-10">
        <button className="bg-red-500 text-amber-50 text-3xl px-4 py-2 rounded-md font-medium ">Shop Now</button>
        <button className="text-gray-600 text-3xl px-4 py-2 rounded-md font-medium border-1 border-amber-950">Category</button>
      </div>
      <h3 className="mt-10 mb-2 font-medium text-lg text-slate-400 capitalize">also availabe on</h3>
      <div className="flex flex-row items-center">
      <span><img className="w-14 ml-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADsUlEQVRYhbWWT2gcVRzHP8/sBsSkpkLUpdlQRAgptexuqrR6EcxqDipWacCLB4PJwUNpwEUwiAgt4sE/NHdLwIM1NFvw4CUU04JJs7HSRDYbD1VCNiRBiTtJDmnh62F3pjOZyc40ab/wmHlvfu/9vu/7+/3eG6hBUpOkjyXN6+HhlqRBSY/ihqQOSX8+RMdBRNoBjKQm4CbwLBFhWRYLCwtO3xhDIpEgkUhEXQJgFjiOpE+j0h7L59WdzSoWjzutwfXenc1qLJ+/HyXOoAjSVyoVdWezHmf1Wi6Xi0qgQBSr07293l3HYqFkIiqxFUogn88HOkhlMjrd2+sLid1eyWajEFAogQ/6+0MlzuVygSSi4JGwVDXG+MaGhoY8/b6+PgROux8YSaFz3GVnjCGTyfhs4o2Nnr6Au9vboQRiUVg2NzfT1dXl9JeXlymXy/w6OQnAxMRE1akUqNi+CdhOv7t4kR9HR5mbnfV8E2AIDlcooiTKWD6vtmQyMNHqlWMUhObAzMwMJ06edHZpPwEGz54l2d7Okc5OXuvp8akSJQdCFUil076ddWezWlpa8tjtVYG6BEqlUuDChULBY1cul30haXgQ50Bxft6R0y2tuyIAisWi825cz+Xl5dAI1CWwuLjoWdR+tyzLY/fDpUuB829MT4cSqBuC8fFx5/LZ7SgeGRnx2dhhSGcyqlQqdUNQl4A7tjtLL5VOqy2Z3LUM7fELw8N7JyD5r+LdWiqT8Y21JZMqlUr7I2D/jPh2WJO8oRYSy7KcW9FWKMx5JAI2iQvDww6RhlhMqUxG/QMDvpI8d/68+gcGZFmu2G8sSavT0soNadubE96T8I9v4bEkHH47PHujYKsMUx/Cav5eLR/7Bo6ccUy8ZXioB37rh6unYK2wfwKNB+DoJ/D6ErxTgaZO3w+Dl0BLB7xxG7b/hfHnq0T+ugx3NvZGYHUK5s7BT4dgswwbRWh90WNiJN0FGjyjdyy4+Rnc/gpUu4CS70PLMXjypSrReDO+OeslWJ+D1WuwcgW2/6meXCcuQ/wAzH0Or/7invWfkXQLeC5wB2sFmHwPNov3jsOdd6dxje38HXjqLUh/AY93wNp0lURLh9viupH0EfBlIAEbf4/B/Newfo2ge1ly+TbAM4Nw+F1oPV53WWDASGoEpoBUmDVbZVibgs1FWLlac2ggfrAanoNHofUFf3iCcR14ubYDPS3pSpQz4QHhe0lP2II5kHQKeBPoYre82Dt+B2aAUWPMz/bg/5AZ2OKL1i4FAAAAAElFTkSuQmCC" alt="amzon"/></span>
      <span><img  className="w-14 ml-6 "  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAABDlBMVEVIaecpU+UrVeU7YecVTesASu4NSesGSO27sXn00xj51gCzq4EeUOj/qwD80xD/0QDhuBfUrRz8zgbPqB+YmKL/7Rb6xgD6wQDvtgDorwX5vACKj63GwpX/8ln27Gf30l/50Vv3zl72zF+4t6HXzlj26Sv26C/z5lf06Ejy4gDMxG715y/y5aLx6If17qXNxVr25C7n3FP18s/39N3p3D/44CLp2xXu6bjJu2/48Jbw6rHXw1fj1SHr4oxzfaoeQs4AMd4AMeC9uXb/4wx6gqAAKOMOO9oZQNgcQddVZb8AONycnpJuebH/8wrczkeopIJCWME3UsYtS8iom4LNtWjbvlDx0CrRvFvqwTJwd765+mGKAAABjUlEQVR4AX3Sg2IDQRRA0RjrYqoYM21s2xNb//8jfcu6N3rJyXpNJrPlj8xWBW12h/1LDqdNR7PLzXzLzXIKWswcL4iidCPeKol3kigKvE1d0nmPHh4fn55ftJ6fHh9vkcdpAXR4ff5AIBAMhkLhcDgUCgWD8NXvi9gAnVFMMMavb1hNnUgs7lAxkSA4mcIkARGcViasYiYLPyVy+RiBT0JihSIM2ZKOWcByJR3DUCxdKRMCWDUwQbLlZKHm99cK9TKCsIaNEiwJ2my26vVWMZZpd7q9/uAD5a0lmnKx4Wg8oeMp+rIkBP9Bwy6ls17vM2oRHB1R2p1jhEqfkKhP1B7T8WKp762xWiBAOqGzPv6CoBjJJXqw1iJC2Q+EVuv2Zrvd7iaUTra7/aCkIwM4GKzuZ5MJGOhsOHAzBwWPzGl1rrL7+1GvJ+OsNzozBgoC3BfuE+SG1c72pxPDCCraj6Jg1IX9OTLyJOpodOzSSVcdVeQWF6P9mNLdSZ2vHKCFsxvZ5HtZmzmz9d87/h1+mmLHTig4YwAAAABJRU5ErkJggg==" alt="flipcart"/></span>
      </div>

    </div>
  );
};

export default Content;
