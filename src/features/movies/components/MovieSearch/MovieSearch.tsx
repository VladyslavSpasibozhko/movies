import Select from "react-select";
import { useNavigation } from "@hooks/useNavigation";
import { useSearchMovies } from "@features/movies/hooks/useMovies";
import "./MovieSearch.css";

export function MovieSearch() {
  const { goTo } = useNavigation();
  const { fetchDebounce, data, isLoading } = useSearchMovies();

  // TODO: add styles to select
  return (
    <Select
      classNamePrefix="mv"
      className="mv-select"
      placeholder="Search movie by name"
      options={data.movies}
      isLoading={isLoading}
      getOptionLabel={(o) => o.title}
      getOptionValue={(o) => o.id.toString()}
      onInputChange={(value, meta) => {
        if (value === meta.prevInputValue) return;
        fetchDebounce(value);
      }}
      onChange={(option) => {
        if (option) goTo("/movies/:id", { id: option.id });
      }}
      components={{
        IndicatorSeparator: null,
        DropdownIndicator: null,
      }}
    />
  );
}
