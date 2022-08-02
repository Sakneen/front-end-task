const Tag = ({ text = "", color = "#000" }) => {
  return (
    <span className="tag">
      {text}
      <style jsx>
        {`
          .tag {
            background-color: ${color};
            border-radius: 0.25rem;
            color: #fff;
            font-size: 0.6rem;
            padding: 0.5rem;
          }
        `}
      </style>
    </span>
  );
};
export default Tag;
