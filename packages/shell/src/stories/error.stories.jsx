import { action } from "@storybook/addon-actions";

export default {
  title: "Error",
  args: {
    title: "Error",
    details: "Sorry, something went wrong :(",
    retry: false,
  },
};

const Template = ({ title, details, retry }) => (
  <div className="app">
    <div className="error">
      <h1 className="error-title">{title}</h1>
      <p className="error-details">{details}</p>
      {retry && (
        <button
          className="button error-action"
          onClick={action("click[.button]")}
        >
          Retry
        </button>
      )}
    </div>
    <footer className="footer">
      <div className="footer-contents">
        <span>&copy; Foo Bar</span>
        <ul className="footer-link-list">
          <li>
            <a href="#">Foo</a>
          </li>
          <li>
            <a href="#">Bar</a>
          </li>
          <li>
            <a href="#">Baz</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

export const Default = Template.bind({});

export const Retriable = Template.bind({});
Retriable.args = {
  retry: true,
};
