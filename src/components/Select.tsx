type Props = React.ComponentProps<"select"> & {
    legend?: string
}

export function Select ({legend, children, ...rest}: Props) {
    return(
        <fieldset className="flex flex-1 max-h-20 text-gray-800 focus-within:text-gray-900">
            {legend && (
                <legend className="uppercase text-xs  mb-2 text-inherit">
                    {legend}
                </legend>
            )}

            <select
                
                className="w-full h-12 rounded-lg border border-gray-800 px-4 text-sm text-gray-900 bg-transparent outline-none focus:border-2 focus:border-gray-800 placeholder-gray-900" 
                {...rest} 
            >
                <option value="" disabled hidden>
                    Selecionar
                </option>
                {children}    
            </select>
        </fieldset>
    )
}